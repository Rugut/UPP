Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:497px;height:476px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:451px;width:497px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:483px;height:435px;',
			height: 435,width: 483,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:468px;height:403px;',
			height: 403,width: 468,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
					]
				},
				{
					title:'Свойства разделов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:469px;height:24px;',
			items:
			[
				{
					text:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять все флажки в текущей колонке',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:469px;height:378px;',
			height: 378,width: 469,
			columns:
			[
				{
					text:'Страницы',
					width:'241',
				},
				{
					text:'Показывать',
					width:'68',
				},
				{
					text:'Печатать',
					width:'68',
				},
				{
					text:'Выгружать',
					width:'68',
				},
			]
		},
					]
				},
			]
		},
	]
});