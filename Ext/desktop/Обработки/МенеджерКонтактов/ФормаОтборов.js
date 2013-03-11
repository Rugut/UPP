Ext.define('Обработки.МенеджерКонтактов.ФормаОтборов',
	{
	extend: 'Ext.window.Window',
	height: 277,width: 562,
	iconCls: 'bogus',
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияКонтрагент',
			style: 'position:absolute;left:126px;top:32px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораКонтрагент',
			style: 'position:absolute;left:308px;top:32px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияПользователь',
			style: 'position:absolute;left:126px;top:81px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораПользователь',
			style: 'position:absolute;left:308px;top:81px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияВажность',
			style: 'position:absolute;left:126px;top:105px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораВажность',
			style: 'position:absolute;left:308px;top:105px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияТип',
			style: 'position:absolute;left:126px;top:129px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораТип',
			style: 'position:absolute;left:308px;top:129px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияДата',
			style: 'position:absolute;left:126px;top:8px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДата',
			style: 'position:absolute;left:308px;top:8px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаНач',
			style: 'position:absolute;left:308px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаКон',
			style: 'position:absolute;left:434px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияНомер',
			style: 'position:absolute;left:126px;top:177px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораНомер',
			style: 'position:absolute;left:308px;top:177px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияТипДокумента',
			style: 'position:absolute;left:126px;top:153px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораТипДокумента',
			style: 'position:absolute;left:308px;top:153px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияВидОперации',
			style: 'position:absolute;left:126px;top:201px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораВидОперации',
			style: 'position:absolute;left:308px;top:201px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияДатаСобытия',
			style: 'position:absolute;left:126px;top:225px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаСобытия',
			style: 'position:absolute;left:308px;top:225px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаСобытияНач',
			style: 'position:absolute;left:308px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораДатаСобытияКон',
			style: 'position:absolute;left:434px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:252px;width:562px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСравненияКонтактноеЛицо',
			style: 'position:absolute;left:126px;top:57px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораКонтактноеЛицо',
			style: 'position:absolute;left:308px;top:57px;width:246px;height:19px;',
		},
	]
});