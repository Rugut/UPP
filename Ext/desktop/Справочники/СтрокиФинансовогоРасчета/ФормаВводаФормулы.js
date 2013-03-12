Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаВводаФормулы',
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
				'-',
				{
					text:'Ок',
				},
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
					text:'9',
				},
				{
					text:'<Х',
				},
				{
					text:'.',
				},
				{
					text:'?',
				},
				'-',
				{
					text:'Макс',
				},
				{
					text:'<->',
				},
				'-',
				'-',
				{
					text:'1',
				},
				{
					text:'0',
				},
				{
					text:'<',
				},
				{
					text:'3',
				},
				{
					text:'>',
				},
				{
					text:'+',
				},
				{
					text:'7',
				},
				{
					text:'8',
				},
				{
					text:'4',
				},
				{
					text:',',
				},
				{
					text:'-',
				},
				'-',
				{
					text:'Мин',
				},
				{
					text:'5',
				},
				{
					text:'*',
				},
				'-',
				{
					text:')',
				},
				{
					text:'Коды / имена',
				},
				{
					text:'<-',
				},
				{
					text:'(',
				},
				{
					text:'->',
				},
				{
					text:'2',
				},
				{
					text:'Х',
				},
				{
					text:'6',
				},
				{
					text:'=',
				},
				{
					text:'/',
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
					width:'100',
				},
				{
					text:'Строка расчета',
					width:'312',
				},
			]
		},
	]
});