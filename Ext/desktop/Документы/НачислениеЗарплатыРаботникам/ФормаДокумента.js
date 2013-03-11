Ext.define('Документы.НачислениеЗарплатыРаботникам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 555,width: 720,
	iconCls: 'bogus',
	title: 'Начисление зарплаты сотрудникам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:496px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:612px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:110px;top:57px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:110px;top:33px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:503px;width:616px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:496px;top:57px;width:216px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'РасчетНачислений',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Операция',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'РасчетУдержаний',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'ПогашениеЗаймов',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПолныйРасчет',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СоздатьЗарплатаКВыплатеКасса',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'ВвестиПоказателиДляРасчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:530px;width:720px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:151px;width:704px;height:231px;',
			height: 231,width: 704,
			items:
			[
				{
					title:'Начисления',
				},
				{
					title:'Удержания',
				},
				{
					title:'ПогашениеЗаймов',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:123px;width:704px;height:29px;',
			height: 29,width: 704,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:408px;width:704px;height:91px;',
			height: 91,width: 704,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПодменюЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:97px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:91px;top:97px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:174px;top:97px;width:84px;height:22px;',
		},
	]
});