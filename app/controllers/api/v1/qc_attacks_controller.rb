class Api::V1::QcAttacksController < Api::V1::BaseController
  before_action :set_qc_attack, only: [:show, :update, :destroy]

  def show
    render json: @qc_attack
  end

  def create
    render json: QcAttack.create(qc_attack_params)
  end

  def destroy
    render json: @qc_attack.destroy
  end

  def update
    @qc_attack.update_attributes(qc_attack_params)
    render json: @qc_attack
  end

  private
  def set_qc_attack
    @qc_attack = QcAttack.find(params[:id])
  end

  def qc_attack_params
    params.require(:qc_attack).permit!
  end
end
