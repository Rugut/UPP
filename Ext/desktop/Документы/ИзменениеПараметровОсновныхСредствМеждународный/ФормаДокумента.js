Ext.define('Документы.ИзменениеПараметровОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 650,
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
			style: 'position:absolute;left:94px;top:349px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:634px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'СрокПолезногоИспользованияНов',
				},
				{
					text:'НачислятьАмортизацию',
				},
				{
					text:'НачислятьАмортизациюНов',
				},
				{
					text:'МетодНачисленияАмортизации',
				},
				{
					text:'МетодНачисленияАмортизацииНов',
				},
				{
					text:'ПредполагаемыйОбъемПродукции',
				},
				{
					text:'ПредполагаемыйОбъемПродукцииНов',
				},
				{
					text:'КоэффициентУскорения',
				},
				{
					text:'КоэффициентУскоренияНов',
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
				{
					text:'Состояние',
				},
				{
					text:'СостояниеНов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:650px;height:25px;',
			items:
			[
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
					text:'Действие1',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});