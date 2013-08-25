Ext.require(['Данные.Отчеты.XYZABCАнализПродаж'], function () 
{
	Ext.define('Отчеты.XYZABCАнализПродаж.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:270px;height:394px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка диаграммы (XYZ/ABC-анализ продаж)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:254px;height:353px;',
			height: 353,width: 254,
			items:
			[
				{
					items:
					[
		{
			id: 'ПоказателиДиаграммы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:92px;width:240px;height:235px;',
			height: 235,width: 240,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя показателя',
					width:'220',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/XYZABCАнализПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('ПоказателиДиаграммы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.XYZABCАнализПродаж.ФормаНастройкиДиаграммыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.XYZABCАнализПродаж.ФормаНастройкиДиаграммыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Показатель',
			style: 'position:absolute;left:6px;top:68px;width:240px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Тип',
			text: 'Тип:',
			style: 'position:absolute;left:6px;top:6px;width:37px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Диаграмма',
			style: 'position:absolute;left:21px;top:26px;width:153px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Гистограмма',
			style: 'position:absolute;left:21px;top:43px;width:153px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:240px;height:159px;',
			height: 159,width: 240,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМаксимальноеЗначение',
			text: 'Максимальное значение:',
			style: 'position:absolute;left:0px;top:0px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимальноеЗначение',
			style: 'position:absolute;left:135px;top:0px;width:105px;height:19px;',
			width: 105,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервал',
			text: 'Интервал:',
			style: 'position:absolute;left:0px;top:24px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Интервал',
			style: 'position:absolute;left:135px;top:24px;width:105px;height:19px;',
			width: 105,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать распределение по классам',
			style: 'position:absolute;left:0px;top:76px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВысота',
			text: 'Высота:',
			style: 'position:absolute;left:0px;top:48px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВысотаГистрограммы',
			style: 'position:absolute;left:135px;top:48px;width:105px;height:19px;',
			width: 105,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Выводить',
			text: 'Выводить',
			style: 'position:absolute;left:0px;top:101px;width:130px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'количество объектов',
			style: 'position:absolute;left:19px;top:121px;width:206px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'сумму параметров анализа',
			style: 'position:absolute;left:19px;top:140px;width:206px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:369px;width:270px;height:25px;',
			width: 270,
			height: 25,
			dock: 'bottom',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});