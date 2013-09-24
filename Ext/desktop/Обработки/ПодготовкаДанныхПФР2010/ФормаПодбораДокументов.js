Ext.require(['Данные.Обработки.ПодготовкаДанныхПФР2010'], function () 
{
	Ext.define('Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:534px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подбор документов прошлых периодов, принятых ПФР',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ПачкиДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:46px;top:74px;width:480px;height:166px;',
			height: 166,width: 480,
			columns:
			[
				{
					text:'Отчетный период',
					width:'100',
					dataIndex:'ОтчетныйПериод',
					flex:1,
				},
				{
					text:'Комплект документов',
					width:'135',
					dataIndex:'Пачка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2010/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ОтчетныйПериод',
					},
					{
						name:'Пачка',
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
						var грид = Ext.getCmp('ПачкиДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:401px;width:534px;height:25px;',
			width: 534,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Подобрать принятые ПФР комплекты сведений - проведенные документы "Опись АДВ-6-2" за соответствующие отчетные периоды',
			style: 'position:absolute;left:46px;top:42px;width:480px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Загрузить ранее принятые ПФР файлы сведений по',
			style: 'position:absolute;left:46px;top:253px;width:272px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗагрузить',
			text: 'Загрузить',
			style: 'position:absolute;left:61px;top:353px;width:90px;height:39px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Файл Описи АДВ-6-2:',
			style: 'position:absolute;left:46px;top:278px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаДанных',
			width: 363,
			height: 19,
			style: 'position:absolute;left:163px;top:278px;width:363px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументАДВ62ДляЗагрузки.Представление',
			width: 237,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:289px;top:302px;width:237px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов',
			text: 'Выбрана Опись АДВ-6-2 за 2 полугодие 2010 года, пачка № 99999, содержит 100 исходных, 100 корректирующих форм СЗВ-6. Для загрузки принятых ПФРом сведений нажмите кнопку Загрузить.',
			style: 'position:absolute;left:182px;top:353px;width:344px;height:39px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ПолеВвода1.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:326px;top:253px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВыМожете',
			text: 'Вы можете:',
			style: 'position:absolute;left:8px;top:8px;width:88px;height:25px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Загрузить в существующий комплект',
			style: 'position:absolute;left:61px;top:302px;width:216px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Создать новый комплект сведений',
			style: 'position:absolute;left:61px;top:326px;width:216px;height:19px;',
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