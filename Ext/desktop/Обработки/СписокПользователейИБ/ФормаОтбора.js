Ext.define('Обработки.СписокПользователейИБ.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:530px;height:319px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:294px;width:530px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Аутентификация Windows:',
			style: 'position:absolute;left:8px;top:267px;width:178px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Аутентификация 1С:Предприятия:',
			style: 'position:absolute;left:8px;top:243px;width:178px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:216px;top:21px;width:49px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:147px;width:49px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:21px;width:49px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'СнятьФлажки',
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
					width:'0',
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
					width:'0',
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
					width:'0',
				},
			]
		},
	]
});