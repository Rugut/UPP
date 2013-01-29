
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class СписаниеОС:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете;//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете;//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ПричиныСписания ПричинаСписания;//Причина списания
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС Событие;
		///<summary>
		///(Регл)
		///</summary>
		public object СчетСписанияБУ;//Счет списания БУ
		///<summary>
		///(Регл)
		///</summary>
		public object СчетСписанияНУ;//Счет списания НУ
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоБУ;//Субконто БУ
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУ;//Субконто НУ
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеРегл;//Событие (регл)
	}
}
