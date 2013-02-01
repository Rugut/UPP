
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class НастройкиАналитикиУчета:СправочникОбъект
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
		public string/*25*/ Код;
		public string/*50*/ Наименование;
		public bool УправленческийУчет;//Управленческий учет
		public bool РегламентированныйУчет;//Регламентированный учет
		public object ЗначениеПоУмолчанию;//Значение по умолчанию
		public bool ТолькоПросмотр;//Только просмотр
		public bool ТолькоПросмотрРегл;//Только просмотр регл.
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
						Insert Into _Reference148(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2641
						,_Fld2642
						,_Fld2643RRef
						,_Fld2644
						,_Fld2645)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@УправленческийУчет
						,@РегламентированныйУчет
						,@ЗначениеПоУмолчанию
						,@ТолькоПросмотр
						,@ТолькоПросмотрРегл)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference148
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2641	= @УправленческийУчет
						,_Fld2642	= @РегламентированныйУчет
						,_Fld2643RRef	= @ЗначениеПоУмолчанию
						,_Fld2644	= @ТолькоПросмотр
						,_Fld2645	= @ТолькоПросмотрРегл
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("УправленческийУчет", УправленческийУчет);
					Команда.Parameters.AddWithValue("РегламентированныйУчет", РегламентированныйУчет);
					Команда.Parameters.AddWithValue("ТолькоПросмотр", ТолькоПросмотр);
					Команда.Parameters.AddWithValue("ТолькоПросмотрРегл", ТолькоПросмотрРегл);
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
					Команда.CommandText = @"Delete _Reference148
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
