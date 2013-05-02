Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаВводаФормулы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:433px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод формулы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:433px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Ок',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:93px;width:417px;height:52px;',
			items:
			[
				{
					text:'+',
				},
				{
					text:'-',
				},
				{
					text:'*',
				},
				{
					text:'/',
				},
				{
					text:'(',
				},
				{
					text:')',
				},
				'-',
				{
					text:'?',
				},
				{
					text:'<',
				},
				{
					text:'=',
				},
				{
					text:'>',
				},
				'-',
				{
					text:'Мин',
				},
				{
					text:'Макс',
				},
				'-',
				{
					text:'<-',
				},
				{
					text:'->',
				},
				{
					text:'<->',
				},
				'-',
				{
					text:'<Х',
				},
				{
					text:'Х',
				},
				{
					text:'Коды / имена',
				},
				'-',
				{
					text:'1',
				},
				{
					text:'2',
				},
				{
					text:'3',
				},
				{
					text:'4',
				},
				{
					text:'5',
				},
				{
					text:'6',
				},
				{
					text:'7',
				},
				{
					text:'8',
				},
				{
					text:'9',
				},
				{
					text:'0',
				},
				{
					text:',',
				},
				{
					text:'.',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:417px;height:192px;',
			height: 192,width: 417,
			columns:
			[
				{
					text:'Код строки',
					width:'73',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Показатель расчета',
					width:'191',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Значение',
					width:'109',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Представление источника',
					width:'268',
					dataIndex:'ПредставлениеИсточника',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПоМоделиБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Представление',
					},
					{
						name:'Значение',
					},
					{
						name:'ПредставлениеИсточника',
					},
				]
			},
		},
	]
});