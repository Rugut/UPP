
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
	public partial class ЗаказНаПроизводство:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ВремяНапоминания;//Время напоминания
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаИсполнения;//Дата исполнения
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
		public V82.ДокументыСсылка.ЗаказНаПроизводство ОсновнойЗаказНаПроизводство;//Основной заказ на производство
		///<summary>
		///Предполагаемая дата запуска заказа
		///</summary>
		public DateTime ДатаЗапуска;//Дата запуска
	}
}