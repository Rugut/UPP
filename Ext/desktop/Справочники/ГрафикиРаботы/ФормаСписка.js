Ext.define('Справочники.ГрафикиРаботы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:388px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Графики работы',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:372px;height:280px;',
			height: 280,width: 372,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'2200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип графика',
					width:'1200',
					dataIndex:'ТипГрафика',
					flex:1,
				},
				{
					text:'Суммированный учет рабочего времени',
					width:'60',
					dataIndex:'СуммированныйУчетРабочегоВремени',
					flex:1,
				},
				{
					text:'Первый выходной',
					width:'1200',
					dataIndex:'ПервыйВыходной',
					flex:1,
				},
				{
					text:'Второй выходной',
					width:'1200',
					dataIndex:'ВторойВыходной',
					flex:1,
				},
				{
					text:'Дата отсчета',
					width:'80',
					dataIndex:'ДатаОтсчета',
					flex:1,
				},
				{
					text:'Длительность рабочей недели',
					width:'80',
					dataIndex:'ДлительностьРабочейНедели',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ГрафикиРаботы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикиРаботы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТипГрафика',
					},
					{
						name:'СуммированныйУчетРабочегоВремени',
					},
					{
						name:'ПервыйВыходной',
					},
					{
						name:'ВторойВыходной',
					},
					{
						name:'ДатаОтсчета',
					},
					{
						name:'ДлительностьРабочейНедели',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:388px;height:25px;',
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
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
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
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
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
				'-',
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