Ext.require(['Данные.Обработки.ВыгрузкаДанныхCommerceML'], function () 
{
	Ext.define('Обработки.ВыгрузкаДанныхCommerceML.ФормаФайловВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выгруженные файлы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СоответствиеКонтрагентовИФайлов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:89px;width:460px;height:245px;',
			height: 245,width: 460,
			columns:
			[
				{
					text:'Контрагент',
					width:'200',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'200',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Кол-во документов',
					width:'100',
					dataIndex:'КоличествоДокументов',
					flex:1,
				},
				{
					text:'Успешно',
					width:'59',
					dataIndex:'РезультатВыгрузки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'КоличествоДокументов',
					},
					{
						name:'РезультатВыгрузки',
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
						var грид = Ext.getCmp('СоответствиеКонтрагентовИФайлов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаДанныхCommerceML.ФормаФайловВыгрузкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаДанныхCommerceML.ФормаФайловВыгрузкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВыгрузкиДокументов',
			text: 'Надпись выгрузки документов. Информация по выгруженным файлам приведена ниже:',
			style: 'position:absolute;left:50px;top:8px;width:418px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКаталогВыгрузкиДанных',
			text: 'Каталог выгрузки данных:',
			style: 'position:absolute;left:8px;top:45px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогВыгрузкиДанных',
			width: 317,
			height: 19,
			style: 'position:absolute;left:151px;top:45px;width:317px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выгруженные файлы',
			style: 'position:absolute;left:8px;top:69px;width:460px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:476px;height:25px;',
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