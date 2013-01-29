
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class ВидыСчетчиковДляЗначенийРазрядов:СправочникОбъект
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
		public string/*50*/ Наименование;
		public decimal/*(2)*/ РазмерСчетчика;//Размер счетчика
		public bool ВПределахОрганизации;//В пределах организации
		public bool ВПределахПодразделения;//В пределах подразделения
		public bool ВПределахНоменклатурнойГруппы;//В пределах номенклатурной группы
		public bool ВПределахНоменклатуры;//В пределах номенклатуры
		public decimal/*(20)*/ НачальноеЗначение;//Начальное значение
		public decimal/*(20)*/ КонечноеЗначение;//Конечное значение
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
						Insert Into _Reference64(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld1975
						,_Fld1976
						,_Fld1977
						,_Fld1978
						,_Fld1979
						,_Fld1980
						,_Fld1981)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@РазмерСчетчика
						,@ВПределахОрганизации
						,@ВПределахПодразделения
						,@ВПределахНоменклатурнойГруппы
						,@ВПределахНоменклатуры
						,@НачальноеЗначение
						,@КонечноеЗначение)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference64
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld1975	= @РазмерСчетчика
						,_Fld1976	= @ВПределахОрганизации
						,_Fld1977	= @ВПределахПодразделения
						,_Fld1978	= @ВПределахНоменклатурнойГруппы
						,_Fld1979	= @ВПределахНоменклатуры
						,_Fld1980	= @НачальноеЗначение
						,_Fld1981	= @КонечноеЗначение
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("РазмерСчетчика", РазмерСчетчика);
					Команда.Parameters.AddWithValue("ВПределахОрганизации", ВПределахОрганизации);
					Команда.Parameters.AddWithValue("ВПределахПодразделения", ВПределахПодразделения);
					Команда.Parameters.AddWithValue("ВПределахНоменклатурнойГруппы", ВПределахНоменклатурнойГруппы);
					Команда.Parameters.AddWithValue("ВПределахНоменклатуры", ВПределахНоменклатуры);
					Команда.Parameters.AddWithValue("НачальноеЗначение", НачальноеЗначение);
					Команда.Parameters.AddWithValue("КонечноеЗначение", КонечноеЗначение);
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
					Команда.CommandText = @"Delete _Reference64
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
