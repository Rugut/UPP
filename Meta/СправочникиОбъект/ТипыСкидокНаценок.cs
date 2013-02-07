
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
	public partial class ТипыСкидокНаценок:СправочникОбъект
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
		public string/*25*/ Наименование;
		///<summary>
		///(Общ) Валюта, в которой задана скидка 
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта;
		///<summary>
		///Удалить (Общ) Истина -  скидка действует для всех номенклатурных позиций, иначе - только для заданных в регистре сведений Скидки
		///</summary>
		public bool ДляВсейНоменклатуры;//Для всей номенклатуры
		///<summary>
		///(Общ) Процент скидки по умолчанию (сумма или процент)
		///</summary>
		public decimal/*(15.2)*/ ПроцентСкидкиНаценки;//Процент скидки наценки
		///<summary>
		///(Общ) Значение условия скидки
		///</summary>
		public object ЗначениеУсловия;//Значение условия
		///<summary>
		///(Общее время начала действия скидки)
		///</summary>
		public DateTime ОбщееВремяНачала;//Общее время начала
		///<summary>
		///(Общее время окончания действия скидки)
		///</summary>
		public DateTime ОбщееВремяОкончания;//Общее время окончания
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.2)*/ ОграничениеСкидкиНаценки;//Ограничение скидки наценки
		///<summary>
		///(Общ) Условие скидки-наценки
		///</summary>
		public V82.Перечисления/*Ссылка*/.УсловияСкидкиНаценки Условие;
		public V82.СправочникиСсылка.Качество Качество;
		public bool ДляВсехПолучателей;//Для всех получателей
		public bool ПоДнямНедели;//По дням недели
		public V82.Перечисления/*Ссылка*/.ВидыСкидок ВидСкидки;//Вид скидки
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
						Insert Into _Reference268(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld3946RRef
						,_Fld3947
						,_Fld3948
						,_Fld3950
						,_Fld3951
						,_Fld3952
						,_Fld3953RRef
						,_Fld3954RRef
						,_Fld3955
						,_Fld3956
						,_Fld3957RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Валюта
						,@ДляВсейНоменклатуры
						,@ПроцентСкидкиНаценки
						,@ОбщееВремяНачала
						,@ОбщееВремяОкончания
						,@ОграничениеСкидкиНаценки
						,@Условие
						,@Качество
						,@ДляВсехПолучателей
						,@ПоДнямНедели
						,@ВидСкидки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference268
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3946RRef	= @Валюта
						,_Fld3947	= @ДляВсейНоменклатуры
						,_Fld3948	= @ПроцентСкидкиНаценки
						,_Fld3950	= @ОбщееВремяНачала
						,_Fld3951	= @ОбщееВремяОкончания
						,_Fld3952	= @ОграничениеСкидкиНаценки
						,_Fld3953RRef	= @Условие
						,_Fld3954RRef	= @Качество
						,_Fld3955	= @ДляВсехПолучателей
						,_Fld3956	= @ПоДнямНедели
						,_Fld3957RRef	= @ВидСкидки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("ДляВсейНоменклатуры", ДляВсейНоменклатуры);
					Команда.Parameters.AddWithValue("ПроцентСкидкиНаценки", ПроцентСкидкиНаценки);
					Команда.Parameters.AddWithValue("ОбщееВремяНачала", ОбщееВремяНачала);
					Команда.Parameters.AddWithValue("ОбщееВремяОкончания", ОбщееВремяОкончания);
					Команда.Parameters.AddWithValue("ОграничениеСкидкиНаценки", ОграничениеСкидкиНаценки);
					Команда.Parameters.AddWithValue("Условие", Условие.Ключ());
					Команда.Parameters.AddWithValue("Качество", Качество.Ссылка);
					Команда.Parameters.AddWithValue("ДляВсехПолучателей", ДляВсехПолучателей);
					Команда.Parameters.AddWithValue("ПоДнямНедели", ПоДнямНедели);
					Команда.Parameters.AddWithValue("ВидСкидки", ВидСкидки.Ключ());
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
					Команда.CommandText = @"Delete _Reference268
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}