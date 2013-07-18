Ext.require(['Данные.Справочники.ВнешниеОбработки'], function () 
{
	Ext.define('Справочники.ВнешниеОбработки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:618px;height:386px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация внешней обработки, печатной формы,  обработки по заполнению табличных частей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование:',
			style: 'position:absolute;left:232px;top:33px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 285,
			height: 19,
			style: 'position:absolute;left:325px;top:33px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:57px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидОбработки',
			width: 185,
			height: 19,
			style: 'position:absolute;left:39px;top:57px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 185,
			height: 19,
			style: 'position:absolute;left:39px;top:33px;width:185px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:602px;height:247px;',
			height: 247,width: 602,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Принадлежность печатной формы',
					items:
					[
		{
			id: 'Принадлежность',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:47px;width:602px;height:200px;',
			height: 200,width: 602,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Представление объекта',
					width:'129',
					dataIndex:'ПредставлениеОбъекта',
					flex:1,
				},
				{
					text:'Табличная часть',
					width:'104',
					dataIndex:'ТабличнаяЧасть',
					flex:1,
				},
				{
					text:'Представление кнопки',
					width:'198',
					dataIndex:'ПредставлениеКнопки',
					flex:1,
				},
				{
					text:'Отбор',
					width:'82',
					dataIndex:'ПредставлениеОтбораПостроителя',
					flex:1,
				},
				{
					text:'Файл печатной формы',
					width:'126',
					dataIndex:'ИмяФайлаПечатнойФормы',
					flex:1,
				},
				{
					text:'Заменяемая печатная форма',
					width:'132',
					dataIndex:'ЗаменяемаяПечатнаяФорма',
					flex:1,
				},
				{
					text:'НастройкиПостроителяДляОтбора',
					width:'48',
					dataIndex:'НастройкиПостроителяДляОтбора',
					flex:1,
				},
				{
					text:'Табличная часть имя',
					width:'21',
					dataIndex:'ТабличнаяЧастьИмя',
					flex:1,
				},
				{
					text:'Хранилище внешней обработки',
					width:'103',
					dataIndex:'ХранилищеВнешнейОбработки',
					flex:1,
				},
				{
					text:'Параметры обработки',
					width:'169',
					dataIndex:'ПредставлениеНастроекОбработки',
					flex:1,
				},
				{
					text:'Способ запуска',
					width:'100',
					dataIndex:'СпособЗапуска',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПредставлениеОбъекта',
					},
					{
						name:'ТабличнаяЧасть',
					},
					{
						name:'ПредставлениеКнопки',
					},
					{
						name:'ПредставлениеОтбораПостроителя',
					},
					{
						name:'ИмяФайлаПечатнойФормы',
					},
					{
						name:'ЗаменяемаяПечатнаяФорма',
					},
					{
						name:'НастройкиПостроителяДляОтбора',
					},
					{
						name:'ТабличнаяЧастьИмя',
					},
					{
						name:'ХранилищеВнешнейОбработки',
					},
					{
						name:'ПредставлениеНастроекОбработки',
					},
					{
						name:'СпособЗапуска',
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
						var грид = Ext.getCmp('Принадлежность');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВнешниеОбработки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнешниеОбработки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Принадлежность',
			style: 'position:absolute;left:0px;top:6px;width:602px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:232px;top:57px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 285,
			height: 19,
			style: 'position:absolute;left:325px;top:57px;width:285px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:361px;width:618px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'КомментарийКФайлуИсточнику',
			text: '',
			style: 'position:absolute;left:8px;top:81px;width:514px;height:27px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:618px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Настройка доступа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:527px;top:81px;width:83px;height:27px;',
			dock: 'top',
			items:
			[
				{
					text:'Заменить файл',
				},
				{
					text:'Сохранить файл на диск',
				},
				{
					text:'Удалить файл',
				},
			]
		},
	]
	});
});