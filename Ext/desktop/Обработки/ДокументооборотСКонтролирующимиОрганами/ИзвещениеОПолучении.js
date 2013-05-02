Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОПолучении',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:648px;height:179px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Извещение о получении',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:154px;width:648px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дата и время получения:',
			style: 'position:absolute;left:8px;top:8px;width:162px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяПолучения',
			style: 'position:absolute;left:173px;top:8px;width:467px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:632px;height:90px;',
			height: 90,width: 632,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИмяФайла',
					},
				]
			},
		},
	]
});