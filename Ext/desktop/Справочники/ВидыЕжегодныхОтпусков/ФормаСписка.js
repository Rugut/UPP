Ext.define('Справочники.ВидыЕжегодныхОтпусков.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:567px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды ежегодных отпусков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:551px;height:259px;',
			height: 259,width: 551,
			columns:
			[
				{
					text:'',
					width:'20',
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
					width:'250',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Способ расчета остатка отпуска',
					width:'120',
					dataIndex:'СпособРасчетаОстаткаОтпуска',
					flex:1,
				},
				{
					text:'Количество дней отпуска в год',
					width:'80',
					dataIndex:'КоличествоДнейОтпускаВГод',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыЕжегодныхОтпусков/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'СпособРасчетаОстаткаОтпуска',
					},
					{
						name:'КоличествоДнейОтпускаВГод',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:567px;height:25px;',
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
	]
});