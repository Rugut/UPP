Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:531px;height:419px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:531px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Выполнить расчет',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:394px;width:531px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:515px;height:275px;',
			height: 275,width: 515,
			items:
			[
				{
					title:'Порядок расчета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:501px;height:120px;',
			height: 120,width: 501,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидОтраженияВУчете',
			text: 'Использовать данные:',
			style: 'position:absolute;left:6px;top:30px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'упр. учета',
			style: 'position:absolute;left:133px;top:30px;width:127px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'регл. учета',
			style: 'position:absolute;left:267px;top:30px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Рассчитывать цены:',
			style: 'position:absolute;left:6px;top:181px;width:121px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по поступлению',
			style: 'position:absolute;left:133px;top:181px;width:127px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по списанию',
			style: 'position:absolute;left:267px;top:181px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаРасчетаСебестоимости',
			style: 'position:absolute;left:267px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предварительно рассчитывать себестоимость',
			style: 'position:absolute;left:6px;top:8px;width:260px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Записать по типу цен:',
			style: 'position:absolute;left:6px;top:206px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:133px;top:206px;width:240px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'в новый документ',
			style: 'position:absolute;left:133px;top:234px;width:115px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'в существующий',
			style: 'position:absolute;left:267px;top:234px;width:106px;height:15px;',
		},
					]
				},
				{
					title:'Автоматическое выполнение',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:17px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:6px;top:41px;width:414px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:99px;top:57px;width:424px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:99px;top:33px;width:424px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:367px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:367px;width:436px;height:19px;',
		},
	]
});