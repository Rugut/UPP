Ext.define('Справочники.ВариантыОтветовОпросов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Варианты ответов опросов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:444px;height:280px;',
			height: 280,width: 444,
			columns:
			[
				{
					text:' ',
					width:'32',
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
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
				'-',
			]
		},
	]
});