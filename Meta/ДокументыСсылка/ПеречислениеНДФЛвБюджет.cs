
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Регл)
	///</summary>
	public partial class ПеречислениеНДФЛвБюджет:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public DateTime ДатаПлатежа;//Дата платежа
		public DateTime МесяцНалоговогоПериода;//Месяц налогового периода
		public decimal/*(15.2)*/ Сумма;
		public string/*(30)*/ ПлатежноеПоручениеНомер;//Номер платежного поручения
		public DateTime ПлатежноеПоручениеДата;//Дата платежного поручения
		public V82.Перечисления/*Ссылка*/.НДФЛСтавки Ставка;
		///<summary>
		///(Регл)
		///</summary>
		public string/*(21)*/ ОКАТО_КПП;//ОКАТО/КПП
		public string/*(100)*/ КраткийСоставДокумента;//Краткий состав документа
	}
}
