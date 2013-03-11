Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 422,width: 740,
	iconCls: 'bogus',
	title: 'Установка соответствия счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:397px;width:740px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:151px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:345px;width:636px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:370px;width:636px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:724px;height:283px;',
			height: 283,width: 724,
			items:
			[
				{
					title:'СоответствияСчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:710px;height:227px;',
			height: 227,width: 710,
			columns:
			[
				{
					text:'Учитывается',
				},
				{
					text:'СчетХозрасчетный',
				},
				{
					text:'ВидДвижения',
				},
				{
					text:'СубконтоХозр1',
				},
				{
					text:'СубконтоХозр2',
				},
				{
					text:'СубконтоХозр3',
				},
				{
					text:'СчетМеждународный',
				},
				{
					text:'СубконтоМежд1',
				},
				{
					text:'СубконтоМежд2',
				},
				{
					text:'СубконтоМежд3',
				},
				{
					text:'РеквизитПредставление',
				},
				{
					text:'Значение',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:710px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоТекущемуСоответствию',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Импорт',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'ИсключенияПроводок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:710px;height:227px;',
			height: 227,width: 710,
			columns:
			[
				{
					text:'Учитывается',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:710px;height:24px;',
			items:
			[
				{
					text:'ПоТекущемуСоответствию',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Импорт',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
			]
		},
	]
});