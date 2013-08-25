Ext.require(['Данные.Справочники.НастройкиОбменаДанными'], function () 
{
	Ext.define('Справочники.НастройкиОбменаДанными.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:388px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки обмена данными',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:624px;height:347px;',
			height: 347,width: 624,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Узел',
					width:'120',
					dataIndex:'УзелИнформационнойБазы',
					flex:1,
				},
				{
					text:'Загрузка',
					width:'110',
					dataIndex:'ЗагрузкаДанных',
					flex:1,
				},
				{
					text:'Отложенные движения документов',
					width:'110',
					dataIndex:'РезультатОтложенныхДвиженийДокументов',
					flex:1,
				},
				{
					text:'Наличие фоновой загрузки',
					width:'110',
					dataIndex:'НаличиеДанныхФоновойЗагрузки',
					flex:1,
				},
				{
					text:'Выгрузка',
					width:'100',
					dataIndex:'ВыгрузкаДанных',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'143',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'On line обмен',
					width:'70',
					dataIndex:'OnLineОбмен',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаДанными").data,
					fields: ['Ссылка','Картинка','Код','Наименование','УзелИнформационнойБазы','ЗагрузкаДанных','РезультатОтложенныхДвиженийДокументов','НаличиеДанныхФоновойЗагрузки','ВыгрузкаДанных','Комментарий','OnLineОбмен',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаДанными/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'УзелИнформационнойБазы',
					},
					{
						name:'ЗагрузкаДанных',
					},
					{
						name:'РезультатОтложенныхДвиженийДокументов',
					},
					{
						name:'НаличиеДанныхФоновойЗагрузки',
					},
					{
						name:'ВыгрузкаДанных',
					},
					{
						name:'Комментарий',
					},
					{
						name:'OnLineОбмен',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиОбменаДанными.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаДанными.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			width: 640,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Ввести на основании...',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Выполнить обмен',
				},
				{
					text:'Монитор обменов',
				},
				'-',
				{
					text:'Настройка обновления конфигурации',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				{
					text:'Ввести на основании...',
				},
				'-',
				{
					text:'Выполнить обмен',
				},
				'-',
				{
					text:'Монитор обменов',
				},
				{
					text:'Справка',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});