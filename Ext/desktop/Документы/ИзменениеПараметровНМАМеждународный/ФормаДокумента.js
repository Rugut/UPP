Ext.define('Документы.ИзменениеПараметровНМАМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 651,
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
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:350px;width:549px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:635px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:120px;width:635px;height:220px;',
			height: 220,width: 635,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НематериальныйАктив',
				},
				{
					text:'НачислятьАмортизацию',
				},
				{
					text:'НачислятьАмортизациюНов',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'СрокПолезногоИспользованияНов',
				},
				{
					text:'МетодНачисленияАмортизации',
				},
				{
					text:'МетодНачисленияАмортизацииНов',
				},
				{
					text:'КоэффициентУскорения',
				},
				{
					text:'КоэффициентУскоренияНов',
				},
				{
					text:'ПредполагаемыйОбъемПродукции',
				},
				{
					text:'ПредполагаемыйОбъемПродукцииНов',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНов',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто1Нов',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто2Нов',
				},
				{
					text:'Субконто3',
				},
				{
					text:'Субконто3Нов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
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
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:651px;height:25px;',
			items:
			[
				{
					text:'Действие1',
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
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});