Ext.define('Справочники.БанковскиеСчета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Банковские счета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:259px;',
			height: 259,width: 764,
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
					text:'Вид счета',
					width:'120',
					dataIndex:'ВидСчета',
					flex:1,
				},
				{
					text:'Номер счета',
					width:'160',
					dataIndex:'НомерСчета',
					flex:1,
				},
				{
					text:'Валюта',
					width:'64',
					dataIndex:'ВалютаДенежныхСредств',
					flex:1,
				},
				{
					text:'Банк',
					width:'220',
					dataIndex:'Банк',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/БанковскиеСчета/ВыбратьПоСсылке/100'},
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
						name:'ВидСчета',
					},
					{
						name:'НомерСчета',
					},
					{
						name:'ВалютаДенежныхСредств',
					},
					{
						name:'Банк',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});