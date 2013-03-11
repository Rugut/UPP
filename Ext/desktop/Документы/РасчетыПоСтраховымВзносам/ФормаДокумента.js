Ext.define('Документы.РасчетыПоСтраховымВзносам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 510,width: 670,
	iconCls: 'bogus',
	title: 'Расчеты с фондами по страховым взносам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:442px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:542px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:442px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПодменюПерейти',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:485px;width:670px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:458px;width:566px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:654px;height:340px;',
			height: 340,width: 654,
			items:
			[
				{
					title:'Уплата',
				},
				{
					title:'УплатаФСС',
				},
				{
					title:'УплатаФОМС',
				},
				{
					title:'Начисление',
				},
				{
					title:'ПособияПоСтрахованию',
				},
				{
					title:'ПособияПоСтрахованию2011',
				},
				{
					title:'УстаревшиеДанные',
				},
				{
					title:'ДоначислениеВзносов',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперации',
			style: 'position:absolute;left:115px;top:33px;width:220px;height:19px;',
		},
	]
});