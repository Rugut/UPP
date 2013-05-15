Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ВидыОтправляемыхДокументов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:802px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды отправляемых документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:200px;top:33px;width:594px;height:280px;',
			height: 280,width: 594,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'48',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип получателя',
					width:'100',
					dataIndex:'ТипПолучателя',
					flex:1,
				},
				{
					text:'Тип документа',
					width:'100',
					dataIndex:'ТипДокумента',
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
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТипПолучателя',
					},
					{
						name:'ТипДокумента',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:186px;height:280px;',
			height: 280,width: 186,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
					dataIndex:'Наименование',
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
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтчета',
			text: '',
			style: 'position:absolute;left:8px;top:342px;width:786px;height:40px;',
		},
		{
			xtype: 'fieldset',
			title: 'Описание',
			style: 'position:absolute;left:8px;top:321px;width:786px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:802px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Новая группа',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
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
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Найти в дереве',
				},
				'-',
				{
					text:'Восстановить исходные реквизиты',
				},
			]
		},
	]
});