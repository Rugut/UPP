Ext.define('Отчеты.РегистрУчетаПрямыхРасходовНаПроизводство.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:372px;height:353px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистр учета прямых расходов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:328px;width:372px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:358px;height:312px;',
			height: 312,width: 358,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:30px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:30px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:166px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:344px;height:161px;',
			height: 161,width: 344,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Показатель',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:344px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид отчета:',
			style: 'position:absolute;left:6px;top:54px;width:76px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Виды расходов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:280px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
	]
});