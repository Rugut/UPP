
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
	///(Общ) 
	///</summary>
	public partial class ТехнологическиеОперации:СправочникОбъект
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
		public V82.СправочникиСсылка.СтатьиЗатрат ОсновнаяСтатьяЗатратНаПроизводство;//Основная статья затрат на производство
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.СпособыОтраженияЗарплатыВРеглУчете СпособОтраженияЗарплатыВБухучете;//Способ отражения зарплаты в бухучете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск ОсновнойСпособРаспределенияЗатратНаВыпуск;//Основной способ распределения затрат на выпуск
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.НоменклатурныеГруппы ОсновнаяНоменклатурнаяГруппа;//Основная номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.3)*/ Расценка;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения БазоваяЕдиницаИзмерения;//Базовая единица измерения
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта;
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ НормаВремени;//Норма времени
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.3)*/ Коэффициент;
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
						Insert Into _Reference264(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld3906RRef
						,_Fld3907RRef
						,_Fld3908RRef
						,_Fld3909RRef
						,_Fld3910
						,_Fld3911RRef
						,_Fld3912RRef
						,_Fld3913
						,_Fld3914)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@ОсновнаяСтатьяЗатратНаПроизводство
						,@СпособОтраженияЗарплатыВБухучете
						,@ОсновнойСпособРаспределенияЗатратНаВыпуск
						,@ОсновнаяНоменклатурнаяГруппа
						,@Расценка
						,@БазоваяЕдиницаИзмерения
						,@Валюта
						,@НормаВремени
						,@Коэффициент)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference264
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3906RRef	= @ОсновнаяСтатьяЗатратНаПроизводство
						,_Fld3907RRef	= @СпособОтраженияЗарплатыВБухучете
						,_Fld3908RRef	= @ОсновнойСпособРаспределенияЗатратНаВыпуск
						,_Fld3909RRef	= @ОсновнаяНоменклатурнаяГруппа
						,_Fld3910	= @Расценка
						,_Fld3911RRef	= @БазоваяЕдиницаИзмерения
						,_Fld3912RRef	= @Валюта
						,_Fld3913	= @НормаВремени
						,_Fld3914	= @Коэффициент
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
					Команда.Parameters.AddWithValue("ОсновнаяСтатьяЗатратНаПроизводство", ОсновнаяСтатьяЗатратНаПроизводство.Ссылка);
					Команда.Parameters.AddWithValue("СпособОтраженияЗарплатыВБухучете", СпособОтраженияЗарплатыВБухучете.Ссылка);
					Команда.Parameters.AddWithValue("ОсновнойСпособРаспределенияЗатратНаВыпуск", ОсновнойСпособРаспределенияЗатратНаВыпуск.Ссылка);
					Команда.Parameters.AddWithValue("ОсновнаяНоменклатурнаяГруппа", ОсновнаяНоменклатурнаяГруппа.Ссылка);
					Команда.Parameters.AddWithValue("Расценка", Расценка);
					Команда.Parameters.AddWithValue("БазоваяЕдиницаИзмерения", БазоваяЕдиницаИзмерения.Ссылка);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("НормаВремени", НормаВремени);
					Команда.Parameters.AddWithValue("Коэффициент", Коэффициент);
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
					Команда.CommandText = @"Delete _Reference264
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}