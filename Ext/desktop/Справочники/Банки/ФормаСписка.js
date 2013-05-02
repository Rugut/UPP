Ext.define('Справочники.Банки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Банки',
	
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
					text:'БИК',
					width:'80',
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
					text:'Корр. счет',
					width:'160',
					dataIndex:'КоррСчет',
					flex:1,
				},
				{
					text:'Город',
					width:'160',
					dataIndex:'Город',
					flex:1,
				},
				{
					text:'Адрес',
					width:'220',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Телефоны',
					width:'160',
					dataIndex:'Телефоны',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Банки/ВыбратьПоСсылке/100'},
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
						name:'КоррСчет',
					},
					{
						name:'Город',
					},
					{
						name:'Адрес',
					},
					{
						name:'Телефоны',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Банки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				'-',
				{
					text:'Добавить из классификатора банков РФ',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьТелефоны',
			text: 'Надпись',
			style: 'position:absolute;left:8px;top:358px;width:726px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьАдрес',
			text: 'Надпись',
			style: 'position:absolute;left:8px;top:378px;width:726px;height:15px;',
		},
	]
});