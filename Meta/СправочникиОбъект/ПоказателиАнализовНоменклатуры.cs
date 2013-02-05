
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class ПоказателиАнализовНоменклатуры:СправочникОбъект
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
		public object ВидРезультатаАнализа;//Вид результата анализа
		public decimal/*(15.5)*/ МинЗначение;//Минимальное значение
		public decimal/*(15.5)*/ МаксЗначение;//Максимальное значение
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаИзмерения;//Единица измерения
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
						Insert Into _Reference193(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld3214RRef
						,_Fld3215
						,_Fld3216
						,_Fld3217RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@ВидРезультатаАнализа
						,@МинЗначение
						,@МаксЗначение
						,@ЕдиницаИзмерения)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference193
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3214RRef	= @ВидРезультатаАнализа
						,_Fld3215	= @МинЗначение
						,_Fld3216	= @МаксЗначение
						,_Fld3217RRef	= @ЕдиницаИзмерения
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
					Команда.Parameters.AddWithValue("МинЗначение", МинЗначение);
					Команда.Parameters.AddWithValue("МаксЗначение", МаксЗначение);
					Команда.Parameters.AddWithValue("ЕдиницаИзмерения", ЕдиницаИзмерения.Ссылка);
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
					Команда.CommandText = @"Delete _Reference193
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*НЕ ОбменДанными.Загрузка И НЕ ЭтоГруппа*/)
			{
				//ПВХ = ПланыВидовХарактеристик.ВидыРезультатовАнализаНоменклатуры;
				if(true/*НЕ ЗначениеЗаполнено(ВидРезультатаАнализа)*/)
				{
					//ОбщегоНазначения.СообщитьОбОшибке( "Не указано значение вида результатов анализа.", Отказ);
				}
				if(true/*НЕ ЗначениеЗаполнено(ВидРезультатаАнализа) ИЛИ НЕ ВидРезультатаАнализа.Предопределенный*/)
				{
					//ДопустимыеЗначенияПоказателей.Очистить();
					//ЕдиницаИзмерения = 0;
					//МинЗначение      = 0;
					//МаксЗначение     = 0;
				}
			}
		}
	}
}
