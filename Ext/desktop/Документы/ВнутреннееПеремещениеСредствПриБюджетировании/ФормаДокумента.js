Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 355,width: 654,
	iconCls: 'bogus',
	title: 'Внутреннее перемещение средств при бюджетировании',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Файлы',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:330px;width:653px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
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
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланирования',
			style: 'position:absolute;left:462px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:426px;top:57px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияИсточник',
			style: 'position:absolute;left:254px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоИсточник',
			style: 'position:absolute;left:98px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаИсточник',
			style: 'position:absolute;left:98px;top:201px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсИсточник',
			style: 'position:absolute;left:238px;top:201px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:98px;top:250px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:277px;width:221px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:426px;top:277px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:301px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФОИсточник',
			style: 'position:absolute;left:98px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектИсточник',
			style: 'position:absolute;left:98px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентИсточник',
			style: 'position:absolute;left:98px;top:153px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатураИсточник',
			style: 'position:absolute;left:98px;top:177px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаПриемник',
			style: 'position:absolute;left:426px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсПриемник',
			style: 'position:absolute;left:566px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФОПриемник',
			style: 'position:absolute;left:426px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПриемник',
			style: 'position:absolute;left:426px;top:130px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентПриемник',
			style: 'position:absolute;left:426px;top:154px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатураПриемник',
			style: 'position:absolute;left:426px;top:178px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияПриемник',
			style: 'position:absolute;left:582px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПриемник',
			style: 'position:absolute;left:426px;top:226px;width:64px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПлюсПериод',
			text: '+',
			style: 'position:absolute;left:594px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВыборПериода',
			text: '',
			style: 'position:absolute;left:616px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'МинусПериод',
			text: '-',
			style: 'position:absolute;left:462px;top:33px;width:19px;height:19px;',
		},
	]
});