Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаИнтервалы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:307px;height:414px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Конструктор пользовательского поля',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:389px;width:307px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗначение',
			text: 'Поле:',
			style: 'position:absolute;left:8px;top:8px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:32px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:32px;width:203px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:291px;height:284px;',
			height: 284,width: 291,
			columns:
			[
				{
					text:'Граница',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:291px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Значение',
			style: 'position:absolute;left:96px;top:8px;width:203px;height:19px;',
		},
	]
});