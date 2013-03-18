Ext.define('Обработки.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:576px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные параметры ограничений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:576px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
				'-',
				{
					text:'По умолчанию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:560px;height:202px;',
			height: 202,width: 560,
			columns:
			[
				{
					text:'Имя поля',
					width:'278',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:256px;width:560px;height:192px;',
			height: 192,width: 560,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:42px;width:560px;height:150px;',
			height: 150,width: 560,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:17px;width:560px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:24px;width:560px;height:24px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
			]
		},
	]
});