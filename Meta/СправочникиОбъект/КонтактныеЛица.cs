
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class КонтактныеЛица:СправочникОбъект
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
		public decimal/*(2)*/ КоличествоДнейДоНапоминания;//Количество дней до напоминания
		public bool НапоминатьОДнеРождения;//Напоминать о дне рождения
		public string/*(50)*/ Отчество;
		public DateTime ДатаРождения;//Дата рождения
		public string/*(0)*/ Описание;
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол;
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
						Insert Into _Reference128(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2448
						,_Fld2449
						,_Fld2450
						,_Fld2451
						,_Fld2452
						,_Fld2453
						,_Fld2454
						,_Fld2455RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Фамилия
						,@Имя
						,@КоличествоДнейДоНапоминания
						,@НапоминатьОДнеРождения
						,@Отчество
						,@ДатаРождения
						,@Описание
						,@Пол)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference128
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2448	= @Фамилия
						,_Fld2449	= @Имя
						,_Fld2450	= @КоличествоДнейДоНапоминания
						,_Fld2451	= @НапоминатьОДнеРождения
						,_Fld2452	= @Отчество
						,_Fld2453	= @ДатаРождения
						,_Fld2454	= @Описание
						,_Fld2455RRef	= @Пол
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
					Команда.Parameters.AddWithValue("КоличествоДнейДоНапоминания", КоличествоДнейДоНапоминания);
					Команда.Parameters.AddWithValue("НапоминатьОДнеРождения", НапоминатьОДнеРождения);
					Команда.Parameters.AddWithValue("Отчество", Отчество);
					Команда.Parameters.AddWithValue("ДатаРождения", ДатаРождения);
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("Пол", Пол.Ключ());
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
					Команда.CommandText = @"Delete _Reference128
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
