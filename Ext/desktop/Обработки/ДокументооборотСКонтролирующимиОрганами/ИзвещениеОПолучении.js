Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОПолучении',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:648px;height:179px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Извещение о получении',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дата и время получения:',
			style: 'position:absolute;left:8px;top:8px;width:162px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаВремяПолучения',
			width: 467,
			height: 19,
			style: 'position:absolute;left:173px;top:8px;width:467px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Полученные файлы',
			style: 'position:absolute;left:8px;top:35px;width:632px;height:16px;',
		},
		{
			id: 'Файлы',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяФайла',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Файлы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОПолученииСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОПолученииСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:154px;width:648px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});