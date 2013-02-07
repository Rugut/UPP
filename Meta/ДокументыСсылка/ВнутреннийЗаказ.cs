
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
	public partial class ВнутреннийЗаказ:ДокументСсылка
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
		public V82.Перечисления/*Ссылка*/.ВидыВнутреннегоЗаказа ВидЗаказа;//Вид заказа
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ВремяНапоминания;//Время напоминания
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаОтгрузки;//Дата отгрузки
		///<summary>
		///(Общ)
		///</summary>
		public object Заказчик;
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Упр)
		///</summary>
		public bool НапомнитьОСобытии;//Напомнить о событии
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение;
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ФизическиеЛица Исполнитель;
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения ПодразделениеИсполнитель;//Подразделение исполнитель
		public V82.ДокументыСсылка.Событие ДокументОснование;//Документ основание
	}
}