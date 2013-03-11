Ext.define('Документы.ПереоценкаАктивовМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 460,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:258px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:460px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:460px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:444px;height:236px;',
			height: 236,width: 444,
			items:
			[
				{
					title:'СтраницаОС',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:430px;height:179px;',
			height: 179,width: 430,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОС',
				},
				{
					text:'Сумма',
				},
				{
					text:'ЛиквидационнаяСтоимость',
				},
			]
		},
					]
				},
				{
					title:'СтраницаНМА',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:430px;height:179px;',
			height: 179,width: 430,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НМА',
				},
				{
					text:'Сумма',
				},
			]
		},
					]
				},
				{
					title:'СтраницаФА',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:430px;height:179px;',
			height: 179,width: 430,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Договор',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'Сумма',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:358px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:394px;width:356px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:358px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходов',
			style: 'position:absolute;left:139px;top:105px;width:313px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихРасходов',
			style: 'position:absolute;left:139px;top:130px;width:313px;height:19px;',
		},
	]
});