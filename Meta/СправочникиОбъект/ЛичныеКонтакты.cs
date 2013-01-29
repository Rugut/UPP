
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class ЛичныеКонтакты:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		public Guid Ссылка;
		public long Версия;
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления;
		public bool Предопределенный;
		public Guid Владелец;
		public bool ЭтоГруппа;
		public Guid Родитель;
		public string/*9*/ Код;
		public string/*100*/ Наименование;
		public string/*(50)*/ Фамилия;
		public string/*(50)*/ Имя;
		public string/*(50)*/ Отчество;
		public DateTime ДатаРождения;//Дата рождения
		public string/*(0)*/ Описание;
		public bool НапоминатьОДнеРождения;//Напоминать о дне рождения
		public decimal/*(2)*/ КоличествоДнейДоНапоминания;//Количество дней до напоминания
		public V82.СправочникиСсылка.Пользователи ПользовательДляОграниченияПравДоступа;//Пользователь для ограничения прав доступа
		public void Записать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference133(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2519
						,_Fld2520
						,_Fld2521
						,_Fld2522
						,_Fld2523
						,_Fld2524
						,_Fld2525
						,_Fld2526RRef)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Фамилия
						,@Имя
						,@Отчество
						,@ДатаРождения
						,@Описание
						,@НапоминатьОДнеРождения
						,@КоличествоДнейДоНапоминания
						,@ПользовательДляОграниченияПравДоступа)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference133
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2519	= @Фамилия
						,_Fld2520	= @Имя
						,_Fld2521	= @Отчество
						,_Fld2522	= @ДатаРождения
						,_Fld2523	= @Описание
						,_Fld2524	= @НапоминатьОДнеРождения
						,_Fld2525	= @КоличествоДнейДоНапоминания
						,_Fld2526RRef	= @ПользовательДляОграниченияПравДоступа
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Фамилия", Фамилия);
					Команда.Parameters.AddWithValue("Имя", Имя);
					Команда.Parameters.AddWithValue("Отчество", Отчество);
					Команда.Parameters.AddWithValue("ДатаРождения", ДатаРождения);
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("НапоминатьОДнеРождения", НапоминатьОДнеРождения);
					Команда.Parameters.AddWithValue("КоличествоДнейДоНапоминания", КоличествоДнейДоНапоминания);
					Команда.Parameters.AddWithValue("ПользовательДляОграниченияПравДоступа", ПользовательДляОграниченияПравДоступа.Ссылка);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference133
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/
		// Обработчик события "ПередЗаписью" Объекта
		//

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			/*ПользовательДляОграниченияПравДоступа = глЗначениеПеременной("глТекущийПользователь");*/
		}
	}
}
