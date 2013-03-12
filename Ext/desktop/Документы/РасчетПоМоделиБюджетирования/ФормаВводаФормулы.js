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
					text:'->',
				},
				{
					text:'<->',
				},
				'-',
				{
					text:')',
				},
				{
					text:'<',
				},
				{
					text:'Мин',
				},
				{
					text:'2',
				},
				{
					text:'+',
				},
				{
					text:'=',
				},
				{
					text:'Макс',
				},
				{
					text:'(',
				},
				{
					text:'Коды / имена',
				},
				{
					text:'3',
				},
				{
					text:'0',
				},
				{
					text:'5',
				},
				{
					text:'Х',
				},
				{
					text:'<Х',
				},
				'-',
				{
					text:'8',
				},
				{
					text:'/',
				},
				{
					text:'-',
				},
				'-',
				{
					text:'4',
				},
				{
					text:'?',
				},
				{
					text:'>',
				},
				{
					text:'.',
				},
				'-',
				'-',
				{
					text:'1',
				},
				{
					text:'*',
				},
				{
					text:'<-',
				},
				{
					text:',',
				},
				{
					text:'9',
				},
				{
					text:'7',
				},
				{
					text:'6',
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
				},
				{
					text:'Показатель расчета',
					width:'191',
				},
				{
					text:'Значение',
					width:'109',
				},
				{
					text:'Представление источника',
					width:'268',
				},
			]
		},
	]
});