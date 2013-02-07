
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///Списание НДС предъявленного на расходы
	///</summary>
	public partial class СписаниеНДС:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public V82.СправочникиСсылка.Организации Организация;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		///<summary>
		///(Регл)
		///</summary>
		public object СчетСписанияНДС;//Счет списания НДС
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоСписанияНДС1;//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоСписанияНДС2;//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоСписанияНДС3;//Субконто 3
		public object СчетСписанияНДСНУ;//Счет списания НДС (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоСписанияНДСНУ1;//Субконто (НУ) 1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоСписанияНДСНУ2;//Субконто (НУ) 2
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоСписанияНДСНУ3;//Субконто (НУ) 3
	}
}