
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class ПроизвольныеОтчеты:СправочникОбъект
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
		public string/*100*/ Наименование;
		public ХранилищеЗначения СхемаКомпоновкиДанных;//Схема компоновки данных
		public string/*(0)*/ Описание;
		public V82.Перечисления/*Ссылка*/.ВидыПроизвольныхОтчетов ВидПроизвольногоОтчета;//Вид произвольного отчета
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
						Insert Into _Reference205(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Description
						,_Fld3263
						,_Fld3264
						,_Fld3265RRef)
						Values (
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Наименование
						,@СхемаКомпоновкиДанных
						,@Описание
						,@ВидПроизвольногоОтчета)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference205
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Description	= @Наименование
						,_Fld3263	= @СхемаКомпоновкиДанных
						,_Fld3264	= @Описание
						,_Fld3265RRef	= @ВидПроизвольногоОтчета
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("ВидПроизвольногоОтчета", ВидПроизвольногоОтчета.Ключ());
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
					Команда.CommandText = @"Delete _Reference205
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public object ПолучитьНовыйКлюч(/*ТаблицаИсточникиДанных*/)
		{
			/*МаксКлюч = 0;*/
			return null;
		}
		//

		public object ДобавитьИсточникДанных(/*ТаблицаИсточникиДанных*/)
		{
			/*НовыйИсточникДанных = ТаблицаИсточникиДанных.Добавить();*/
			/*НовыйИсточникДанных.КлючИсточника = ПолучитьНовыйКлюч(ТаблицаИсточникиДанных);*/
			return null;
		}
	}
}
