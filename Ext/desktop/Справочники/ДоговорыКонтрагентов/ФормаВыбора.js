Ext.define('Справочники.ДоговорыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договоры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:320px;',
			height: 320,width: 560,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
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
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Организация',
					width:'95',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Взаиморасчеты',
					width:'108',
					dataIndex:'ВедениеВзаиморасчетов',
					flex:1,
				},
				{
					text:'Вид договора',
					width:'131',
					dataIndex:'ВидДоговора',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Владелец',
					width:'96',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Основной проект',
					width:'231',
					dataIndex:'ОсновнойПроект',
					flex:1,
				},
				{
					text:'Срок действия договора',
					width:'84',
					dataIndex:'СрокДействия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
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
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'Организация',
					},
					{
						name:'ВедениеВзаиморасчетов',
					},
					{
						name:'ВидДоговора',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Владелец',
					},
					{
						name:'ОсновнойПроект',
					},
					{
						name:'СрокДействия',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	]
});