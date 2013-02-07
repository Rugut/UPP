
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class Работодатели:СправочникОбъект
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
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НаименованиеПолное;//Полное наименование
		///<summary>
		///(Регл)
		///</summary>
		public string/*(12)*/ ИНН;
		///<summary>
		///(Регл)
		///</summary>
		public string/*(9)*/ КПП;
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС;//Наименование территориального органа ФСС
		///<summary>
		///(Регл)
		///</summary>
		public string/*(14)*/ РегистрационныйНомерФСС;//Регистрационный номер ФСС
		///<summary>
		///(Регл)
		///</summary>
		public string/*(14)*/ ДополнительныйКодФСС;//Дополнительный код ФСС
		///<summary>
		///(Регл)
		///</summary>
		public string/*(5)*/ КодПодчиненностиФСС;//Код подчиненности ФСС
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
						Insert Into _Reference212(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld3314
						,_Fld3315
						,_Fld3316
						,_Fld3317
						,_Fld3318
						,_Fld3319
						,_Fld3320)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@НаименованиеПолное
						,@ИНН
						,@КПП
						,@НаименованиеТерриториальногоОрганаФСС
						,@РегистрационныйНомерФСС
						,@ДополнительныйКодФСС
						,@КодПодчиненностиФСС)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference212
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3314	= @НаименованиеПолное
						,_Fld3315	= @ИНН
						,_Fld3316	= @КПП
						,_Fld3317	= @НаименованиеТерриториальногоОрганаФСС
						,_Fld3318	= @РегистрационныйНомерФСС
						,_Fld3319	= @ДополнительныйКодФСС
						,_Fld3320	= @КодПодчиненностиФСС
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("НаименованиеПолное", НаименованиеПолное);
					Команда.Parameters.AddWithValue("ИНН", ИНН);
					Команда.Parameters.AddWithValue("КПП", КПП);
					Команда.Parameters.AddWithValue("НаименованиеТерриториальногоОрганаФСС", НаименованиеТерриториальногоОрганаФСС);
					Команда.Parameters.AddWithValue("РегистрационныйНомерФСС", РегистрационныйНомерФСС);
					Команда.Parameters.AddWithValue("ДополнительныйКодФСС", ДополнительныйКодФСС);
					Команда.Parameters.AddWithValue("КодПодчиненностиФСС", КодПодчиненностиФСС);
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
					Команда.CommandText = @"Delete _Reference212
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}