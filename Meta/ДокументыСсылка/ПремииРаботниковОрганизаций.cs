
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
	public partial class ПремииРаботниковОрганизаций:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public DateTime ПериодРегистрации;//Период регистрации
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public object ВидРасчета;//Вид расчета
		public decimal/*(2)*/ ЧислоМесяцев;//Число месяцев
		public DateTime ДатаНачалаБП;//Дата начала БП
		public DateTime ДатаОкончанияБП;//Дата окончания БП
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public string/*(100)*/ КраткийСоставДокумента;//Краткий состав документа
		public V82.ДокументыСсылка.ПремииРаботниковОрганизаций ПерерассчитываемыйДокумент;//Перерассчитываемый документ
	}
}