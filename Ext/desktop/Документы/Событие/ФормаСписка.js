Ext.define('Документы.Событие.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'События',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:720px;height:220px;',
			height: 220,width: 720,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СостояниеСобытия',
					flex:1,
				},
				{
					text:'Дата',
					width:'139',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'117',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид события',
					width:'126',
					dataIndex:'ВидСобытия',
					flex:1,
				},
				{
					text:'Группа события',
					width:'120',
					dataIndex:'ГруппаСобытия',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'126',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'126',
					dataIndex:'КонтактноеЛицо',
					flex:1,
				},
				{
					text:'Описание',
					width:'126',
					dataIndex:'ОписаниеСобытия',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'144',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Проект',
					width:'126',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Содержание',
					width:'105',
					dataIndex:'СодержаниеСобытия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Событие/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'СостояниеСобытия',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидСобытия',
					},
					{
						name:'ГруппаСобытия',
					},
					{
						name:'Контрагент',
					},
					{
						name:'КонтактноеЛицо',
					},
					{
						name:'ОписаниеСобытия',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Проект',
					},
					{
						name:'СодержаниеСобытия',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Содержание',
				},
			]
		},
	]
});