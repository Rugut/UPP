
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
	///(Регл)
	///</summary>
	public partial class КлассификаторИспользованияРабочегоВремени:СправочникОбъект
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
		public string/*50*/ Наименование;
		public string/*(2)*/ БуквенныйКод;//Буквенный код
		public string/*(2)*/ ЦифровойКод;//Цифровой код
		public string/*(0)*/ ПолноеНаименование;//Полное наименование
		public V82.Перечисления/*Ссылка*/.ВидыВремени УдалитьВидВремени;//Удалить вид времени
		public bool РабочееВремя;//Рабочее время
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
						Insert Into _Reference115(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld2400
						,_Fld2401
						,_Fld2402
						,_Fld2403RRef
						,_Fld2404)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@БуквенныйКод
						,@ЦифровойКод
						,@ПолноеНаименование
						,@УдалитьВидВремени
						,@РабочееВремя)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference115
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld2400	= @БуквенныйКод
						,_Fld2401	= @ЦифровойКод
						,_Fld2402	= @ПолноеНаименование
						,_Fld2403RRef	= @УдалитьВидВремени
						,_Fld2404	= @РабочееВремя
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("БуквенныйКод", БуквенныйКод);
					Команда.Parameters.AddWithValue("ЦифровойКод", ЦифровойКод);
					Команда.Parameters.AddWithValue("ПолноеНаименование", ПолноеНаименование);
					Команда.Parameters.AddWithValue("УдалитьВидВремени", УдалитьВидВремени.Ключ());
					Команда.Parameters.AddWithValue("РабочееВремя", РабочееВремя);
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
					Команда.CommandText = @"Delete _Reference115
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}