Ext.define('Справочники.ВариантыОтветовОпросов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Варианты ответов опросов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:444px;height:280px;',
			height: 280,width: 444,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Содержание ответа',
					width:'220',
				},
				{
					text:'Оценка ответа',
					width:'88',
				},
				{
					text:'Развернутый ответ',
					width:'104',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:460px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие10',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});