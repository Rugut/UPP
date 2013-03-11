Ext.define('Документы.НачислениеРезервовМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 409,width: 569,
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
			style: 'position:absolute;left:194px;top:33px;width:148px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:553px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:553px;height:220px;',
			height: 220,width: 553,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРезерва',
				},
				{
					text:'СчетОтнесенияРасходов',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'Валюта',
				},
				{
					text:'ВалютнаяСумма',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:384px;width:569px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:357px;width:467px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:467px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:467px;height:19px;',
		},
	]
});