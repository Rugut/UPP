
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ЗаявкиКандидатов:СправочникОбъект
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
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо;//Физическое лицо
		public V82.СправочникиСсылка.СостоянияЗаявокКандидатов Состояние;//Текущее состояние
		public V82.Перечисления/*Ссылка*/.Важность Важность;
		public string/*(0)*/ Комментарий;//Описание кандидата
		public bool Закрыта;//Работа по кандидату завершена
		public string/*(0)*/ РезультатЗакрытия;//Результат работы по кандидату
		public V82.СправочникиСсылка.ГруппыЗаявокКандидатов ГруппаЗаявок;//Группа кандидатов
		public DateTime ДатаОткрытия;//Дата поступления кандидата
		public V82.СправочникиСсылка.ИсточникиИнформации ИсточникИнформации;//Источник информации
		public V82.СправочникиСсылка.Вакансии Вакансия;
		public object Подразделение;
		public V82.СправочникиСсылка.Должности Должность;
		public V82.СправочникиСсылка.Организации Организация;
		public V82.СправочникиСсылка.Пользователи Ответственный;
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
						Insert Into _Reference100(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2325RRef
						,_Fld2326RRef
						,_Fld2327RRef
						,_Fld2328
						,_Fld2329
						,_Fld2330
						,_Fld2331RRef
						,_Fld2332
						,_Fld2333RRef
						,_Fld2334RRef
						,_Fld2335RRef
						,_Fld2336RRef
						,_Fld2337RRef
						,_Fld2338RRef)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@ФизЛицо
						,@Состояние
						,@Важность
						,@Комментарий
						,@Закрыта
						,@РезультатЗакрытия
						,@ГруппаЗаявок
						,@ДатаОткрытия
						,@ИсточникИнформации
						,@Вакансия
						,@Подразделение
						,@Должность
						,@Организация
						,@Ответственный)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference100
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2325RRef	= @ФизЛицо
						,_Fld2326RRef	= @Состояние
						,_Fld2327RRef	= @Важность
						,_Fld2328	= @Комментарий
						,_Fld2329	= @Закрыта
						,_Fld2330	= @РезультатЗакрытия
						,_Fld2331RRef	= @ГруппаЗаявок
						,_Fld2332	= @ДатаОткрытия
						,_Fld2333RRef	= @ИсточникИнформации
						,_Fld2334RRef	= @Вакансия
						,_Fld2335RRef	= @Подразделение
						,_Fld2336RRef	= @Должность
						,_Fld2337RRef	= @Организация
						,_Fld2338RRef	= @Ответственный
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ФизЛицо", ФизЛицо.Ссылка);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ссылка);
					Команда.Parameters.AddWithValue("Важность", Важность.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Закрыта", Закрыта);
					Команда.Parameters.AddWithValue("РезультатЗакрытия", РезультатЗакрытия);
					Команда.Parameters.AddWithValue("ГруппаЗаявок", ГруппаЗаявок.Ссылка);
					Команда.Parameters.AddWithValue("ДатаОткрытия", ДатаОткрытия);
					Команда.Parameters.AddWithValue("ИсточникИнформации", ИсточникИнформации.Ссылка);
					Команда.Parameters.AddWithValue("Вакансия", Вакансия.Ссылка);
					Команда.Parameters.AddWithValue("Подразделение", Подразделение.Ссылка);
					Команда.Parameters.AddWithValue("Должность", Должность.Ссылка);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Ответственный", Ответственный.Ссылка);
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
					Команда.CommandText = @"Delete _Reference100
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
