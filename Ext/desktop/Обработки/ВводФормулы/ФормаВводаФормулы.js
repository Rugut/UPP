Ext.define('Обработки.ВводФормулы.ФормаВводаФормулы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:479px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод формулы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:479px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:92px;width:463px;height:51px;',
			items:
			[
				{
					text:'Окр',
				},
				{
					text:'(',
				},
				'-',
				{
					text:'Коды / имена',
				},
				{
					text:'Заполнить из шаблона',
				},
				{
					text:'2',
				},
				{
					text:'4',
				},
				{
					text:'9',
				},
				{
					text:'<Х',
				},
				{
					text:')',
				},
				{
					text:'<',
				},
				{
					text:'8',
				},
				{
					text:'?',
				},
				{
					text:'0',
				},
				{
					text:'6',
				},
				'-',
				{
					text:',',
				},
				{
					text:'<->',
				},
				'-',
				{
					text:'Цел',
				},
				{
					text:'.',
				},
				'-',
				{
					text:'7',
				},
				{
					text:'<-',
				},
				{
					text:'1',
				},
				{
					text:'=',
				},
				{
					text:'Макс',
				},
				'-',
				'-',
				{
					text:'Х',
				},
				{
					text:'/',
				},
				'-',
				{
					text:'->',
				},
				{
					text:'3',
				},
				{
					text:'*',
				},
				{
					text:'-',
				},
				{
					text:'Мин',
				},
				{
					text:'5',
				},
				{
					text:'+',
				},
				{
					text:'>',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:185px;width:463px;height:85px;',
			height: 85,width: 463,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Вид параметра',
					width:'176',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:161px;width:463px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:316px;width:463px;height:101px;',
			height: 101,width: 463,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:292px;width:463px;height:24px;',
			items:
			[
			]
		},
	]
});