Ext.define('Обработки.СписокПользователейИБ.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	height: 319,width: 530,
	iconCls: 'bogus',
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:294px;width:530px;height:25px;',
			items:
			[
				{
					text:'Отмена',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:216px;top:21px;width:49px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажкиРоли',
				},
				{
					text:'УстановитьФлажкиРоли',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:147px;width:49px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажкиЯзыки',
				},
				{
					text:'СнятьФлажкиЯзыки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:21px;width:49px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажкиИнтерфейсы',
				},
				{
					text:'СнятьФлажкиИнтерфейсы',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:45px;width:257px;height:193px;',
			height: 193,width: 257,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:270px;top:45px;width:252px;height:81px;',
			height: 81,width: 252,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:270px;top:171px;width:252px;height:67px;',
			height: 67,width: 252,
			columns:
			[
				{
					text:'',
				},
			]
		},
	]
});